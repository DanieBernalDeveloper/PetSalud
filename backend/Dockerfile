# Imagen base
FROM python:3.11-slim

# Variables de entorno para evitar buffering y warnings
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema (para mysqlclient)
RUN apt-get update && apt-get install -y default-libmysqlclient-dev gcc && apt-get clean

# Copiar e instalar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el código del backend
COPY . .

# Dar permisos al script de entrada
RUN chmod +x entrypoint.sh

# Exponer el puerto
EXPOSE 8000

# Comando por defecto
ENTRYPOINT ["./entrypoint.sh"]
