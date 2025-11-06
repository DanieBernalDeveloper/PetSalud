#!/bin/sh

echo "⏳ Esperando a que la base de datos esté lista..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done
echo "✅ Base de datos disponible"

echo "📦 Ejecutando migraciones..."
python manage.py migrate --noinput

echo "🚀 Iniciando servidor Django..."
python manage.py runserver 0.0.0.0:8000
