FROM node:alpine

WORKDIR /SAAS_VIRGEN_DE_LOURDES

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todos los archivos y directorios al directorio de trabajo
COPY . ./

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
