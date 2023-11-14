#!/bin/bash

python manage.py collectstatic --noinput
python manage.py migrate
gunicorn src.config.asgi:application -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000
