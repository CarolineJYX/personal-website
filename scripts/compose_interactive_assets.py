from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
INTERACTIVE = ROOT / "public" / "images" / "interactive"
ART_DIR = INTERACTIVE / "projects" / "art"
POSTER_DIR = INTERACTIVE / "projects" / "final"
LAYER_DIR = INTERACTIVE / "layers"
CONTINUOUS_DIR = INTERACTIVE / "continuous"

CANVAS = (1672, 941)
BLUE = (78, 153, 210, 255)
INK = (35, 39, 37, 255)
MUTED = (104, 110, 106, 255)
PAPER = (250, 250, 247, 246)

MARKER_FONT = "/System/Library/Fonts/MarkerFelt.ttc"
MONO_FONT = "/System/Library/Fonts/SFNSMono.ttf"


def marker(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(MARKER_FONT, size=size)


def mono(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(MONO_FONT, size=size)


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> str:
    words = text.split()
    lines: list[str] = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=font)[2] <= width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return "\n".join(lines)


def heading(draw: ImageDraw.ImageDraw, index: str, label: str, title: str) -> None:
    draw.text((104, 100), f"{index}  ·  {label}", font=mono(15), fill=BLUE)
    draw.multiline_text((104, 132), title, font=marker(55), fill=INK, spacing=1)
    draw.polygon([(105, 250), (210, 247), (205, 253), (110, 256)], fill=BLUE)


def save_layer(name: str, render) -> None:
    image = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    render(ImageDraw.Draw(image))
    image.save(LAYER_DIR / name, optimize=True)


def paper_to_alpha(image: Image.Image, strength: float = 1.0) -> Image.Image:
    """Remove neutral paper/checkerboard while preserving ink, skin, hair and blue marks."""
    rgb = image.convert("RGB")
    red, green, blue = rgb.split()
    maximum = ImageChops.lighter(ImageChops.lighter(red, green), blue)
    minimum = ImageChops.darker(ImageChops.darker(red, green), blue)
    chroma = ImageChops.subtract(maximum, minimum)
    darkness = ImageOps.invert(ImageOps.grayscale(rgb))
    alpha = ImageChops.lighter(
        darkness.point(lambda value: min(255, int(value * 5.2 * strength))),
        chroma.point(lambda value: min(255, int(value * 11 * strength))),
    ).filter(ImageFilter.GaussianBlur(0.45))
    result = rgb.convert("RGBA")
    result.putalpha(alpha)
    return result


def crop_to_canvas(source: Image.Image, box: tuple[int, int, int, int]) -> Image.Image:
    result = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    result.alpha_composite(source.crop(box), (box[0], box[1]))
    return result


def compose_continuous_assets() -> None:
    CONTINUOUS_DIR.mkdir(parents=True, exist_ok=True)

    route = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    route_draw = ImageDraw.Draw(route)
    route_points = [(40, 795), (260, 790), (475, 760), (690, 775), (905, 735), (1120, 755), (1335, 700), (1630, 675)]
    route_draw.line(route_points, fill=(78, 153, 210, 205), width=7, joint="curve")
    for x, y in route_points[1:-1:2]:
        route_draw.ellipse((x - 10, y - 10, x + 10, y + 10), outline=BLUE, width=4, fill=(250, 250, 247, 235))
    route_draw.polygon([(1628, 675), (1596, 657), (1604, 690)], fill=(78, 153, 210, 205))
    route.save(CONTINUOUS_DIR / "blue-route.png", optimize=True)

    work_art = paper_to_alpha(Image.open(INTERACTIVE / "work-desktop.png"))
    work_copy = Image.open(LAYER_DIR / "work-copy.png").convert("RGBA")
    heading_box = (70, 70, 850, 285)
    crop_to_canvas(work_copy, heading_box).save(CONTINUOUS_DIR / "work-heading.png", optimize=True)
    work_boxes = [
        (250, 315, 650, 755),
        (650, 290, 1060, 750),
        (1050, 220, 1515, 745),
    ]
    for index, box in enumerate(work_boxes, start=1):
        card = crop_to_canvas(work_art, box)
        card.alpha_composite(crop_to_canvas(work_copy, box))
        card.save(CONTINUOUS_DIR / f"work-card-{index}.png", optimize=True)

    build = paper_to_alpha(Image.open(INTERACTIVE / "build-desktop.png"), .9)
    build.alpha_composite(Image.open(LAYER_DIR / "build-copy.png").convert("RGBA"))
    build.save(CONTINUOUS_DIR / "build-book.png", optimize=True)

    learn = paper_to_alpha(Image.open(INTERACTIVE / "learn-desktop.png"), .9)
    learn.alpha_composite(Image.open(LAYER_DIR / "learn-copy.png").convert("RGBA"))
    learn.save(CONTINUOUS_DIR / "learn-book.png", optimize=True)

    contact = paper_to_alpha(Image.open(INTERACTIVE / "contact-desktop.png"), 1.05)
    contact.alpha_composite(Image.open(LAYER_DIR / "contact-copy.png").convert("RGBA"))
    contact.save(CONTINUOUS_DIR / "contact-caroline.png", optimize=True)

    for name in ("guide-point.png", "guide-place-card.png", "guide-turn-page.png"):
        cleaned = paper_to_alpha(Image.open(CONTINUOUS_DIR / name), 1.15)
        cleaned.save(CONTINUOUS_DIR / name, optimize=True)


def work_layer(draw: ImageDraw.ImageDraw) -> None:
    heading(draw, "02", "WORK", "I TURN AI CAPABILITIES\nINTO REAL PRODUCTS.")
    cards = [
        (350, "TIKTOK ADS AGENT", "1% → 9.7%", "AUTOMATED CREATIVE ADOPTION"),
        (765, "AIGC EVALUATION", "≈1,300", "CASES MADE MEASURABLE"),
        (1172, "XIAOMI MEMORA", "7,634h", "REAL-WORLD BEHAVIOR STUDIED"),
    ]
    for number, (x, label, metric, detail) in enumerate(cards, start=1):
        draw.text((x, 573), f"0{number}", font=mono(13), fill=BLUE)
        draw.text((x, 600), label, font=mono(18), fill=INK)
        if number == 1:
            draw.text((x, 632), "1%", font=marker(48), fill=INK)
            draw.line((x + 74, 660, x + 130, 660), fill=INK, width=4)
            draw.polygon([(x + 130, 660), (x + 116, 651), (x + 116, 669)], fill=INK)
            draw.text((x + 142, 632), "9.7%", font=marker(48), fill=INK)
        else:
            draw.text((x, 632), metric, font=marker(48), fill=INK)
        draw.text((x, 690), detail, font=mono(12), fill=MUTED)


def build_layer(draw: ImageDraw.ImageDraw) -> None:
    heading(draw, "03", "BUILD", "I ALSO BUILD IDEAS OF MY OWN.")


def learn_layer(draw: ImageDraw.ImageDraw) -> None:
    heading(draw, "04", "LEARN", "I CONNECT COMPUTATION\nWITH STORYTELLING.")
    nodes = [
        (345, "01", "SHANGHAI THEATRE ACADEMY", "DRAMATIC LITERATURE"),
        (740, "02", "NATIONAL UNIVERSITY OF SINGAPORE", "MASTER OF COMPUTING"),
        (1195, "03", "AGENTIC AI RESEARCH", "VIDEO TRACKING & MULTIMODAL SYSTEMS"),
    ]
    for x, number, title, subtitle in nodes:
        width = 310
        title_text = wrap(draw, title, mono(16), width)
        draw.text((x, 585), number, font=mono(12), fill=BLUE)
        draw.multiline_text((x, 610), title_text, font=mono(16), fill=INK, spacing=3, align="center")
        draw.text((x, 660), subtitle, font=mono(11), fill=MUTED)


def contact_layer(draw: ImageDraw.ImageDraw) -> None:
    heading(draw, "05", "CONNECT", "IF YOU'RE BUILDING WHAT\nCOMES NEXT, LET'S TALK.")
    draw.text((465, 430), "A NOTE FROM CAROLINE", font=mono(13), fill=BLUE)
    for y, title in [(475, "EMAIL"), (540, "LINKEDIN"), (605, "GITHUB")]:
        draw.text((465, y), title, font=marker(31), fill=INK)
        draw.text((1072, y + 4), "↗", font=mono(22), fill=INK)
        draw.line((465, y + 49, 1100, y + 49), fill=(86, 91, 87, 110), width=1)


POSTERS = [
    ("tonight-wish-card", "TONIGHT WISH CARD", "AN AI GUIDE TO YOUR CITY AFTER DARK"),
    ("petsona", "PETSONA", "YOUR PET'S AI PERSONA"),
    ("global-top-star", "YOU MUST BECOME A GLOBAL TOP STAR", "AN AI INTERACTIVE FILM-GAME"),
    ("loom", "LOOM", "YOUR AI RELATIONSHIP COACH"),
    ("living-chronicles", "LIVING CHRONICLES", "AI-PRESERVED LIVING MEMORIES"),
    ("curious-conch", "CURIOUS CONCH", "CHILDREN'S AI CRITICAL-THINKING PLATFORM"),
]


def compose_poster(index: int, slug: str, title: str, subtitle: str) -> None:
    source = Image.open(ART_DIR / f"{slug}.png").convert("RGB")
    poster = ImageOps.fit(source, (900, 1200), method=Image.Resampling.LANCZOS, centering=(0.5, 0.44)).convert("RGBA")
    band = Image.new("RGBA", (900, 350), PAPER)
    poster.alpha_composite(band, (0, 850))
    draw = ImageDraw.Draw(poster)
    draw.line((52, 850, 848, 850), fill=(65, 69, 66, 90), width=2)
    draw.text((58, 884), f"PROJECT  {index:02d}", font=mono(20), fill=BLUE)
    title_text = wrap(draw, title, marker(50), 780)
    draw.multiline_text((58, 922), title_text, font=marker(50), fill=INK, spacing=1)
    title_box = draw.multiline_textbbox((58, 922), title_text, font=marker(50), spacing=1)
    subtitle_y = min(1125, title_box[3] + 18)
    draw.multiline_text((58, subtitle_y), wrap(draw, subtitle, mono(17), 780), font=mono(17), fill=MUTED, spacing=3)
    poster.save(POSTER_DIR / f"{slug}.png", optimize=True)


def main() -> None:
    LAYER_DIR.mkdir(parents=True, exist_ok=True)
    POSTER_DIR.mkdir(parents=True, exist_ok=True)
    save_layer("work-copy.png", work_layer)
    save_layer("build-copy.png", build_layer)
    save_layer("learn-copy.png", learn_layer)
    save_layer("contact-copy.png", contact_layer)
    for index, poster in enumerate(POSTERS, start=1):
        compose_poster(index, *poster)
    compose_continuous_assets()


if __name__ == "__main__":
    main()
