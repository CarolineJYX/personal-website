#!/usr/bin/env bash
set -euo pipefail

if [[ ! "${RELEASE_ID:-}" =~ ^[0-9a-f]{40}$ ]]; then
  echo "RELEASE_ID must be a full Git commit SHA." >&2
  exit 1
fi

app_root="/home/ubuntu/apps/jingyuanxia"
releases_dir="${app_root}/releases"
release_dir="${releases_dir}/${RELEASE_ID}"
archive="/tmp/jingyuanxia-${RELEASE_ID}.tgz"

mkdir -p "${release_dir}"
tar -xzf "${archive}" -C "${release_dir}"
printf 'NEXT_PUBLIC_SITE_URL=https://www.jingyuanxia.com\n' > "${release_dir}/.env.production"

cd "${release_dir}"
npm ci
npm run build

ln -sfn "${release_dir}" "${app_root}/current.next"
mv -Tf "${app_root}/current.next" "${app_root}/current"
sudo systemctl restart jingyuanxia

for attempt in {1..10}; do
  if curl --fail --silent http://127.0.0.1:3000/ >/dev/null; then
    break
  fi
  if [[ "${attempt}" -eq 10 ]]; then
    sudo journalctl -u jingyuanxia -n 50 --no-pager
    exit 1
  fi
  sleep 2
done

rm -f "${archive}"
find "${releases_dir}" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' |
  sort -rn |
  tail -n +6 |
  cut -d' ' -f2- |
  xargs -r rm -rf --
