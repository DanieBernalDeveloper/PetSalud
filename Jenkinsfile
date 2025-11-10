pipeline {
    agent any

    environment {
        // Definimos variables de entorno para la IP, el usuario y la ruta del proyecto en Windows
        HOST_IP = "192.168.20.66"  // Dirección IP de tu host Windows
        HOST_USER = "facel"         // Usuario de Windows
        COMPOSE_DIR = "C:/Users/Facel/Downloads/TEST/PetSalud"  // Ruta en Windows donde está tu archivo docker-compose.yml
    }

    stages {
        stage('Verificar credenciales SSH') {
            steps {
                script {
                    // Verificación para comprobar que Jenkins puede acceder a las credenciales SSH
                    echo "Verificando si la credencial SSH está configurada correctamente"

                    // Intentar realizar una conexión SSH simple
                    sshCommand remote: [
                        name: 'Windows-Host',
                        host: HOST_IP,
                        user: HOST_USER,
                        privateKey: credentials('b1394cb4-bed0-4b78-8686-9303e60e3e4b'),  // Reemplaza con el ID de la credencial que estás usando
                        allowAnyHosts: true
                    ], command: "echo 'Conexión SSH exitosa'"
                }
            }
        }

        stage('Conectar a Windows y ejecutar Docker Compose') {
            steps {
                script {
                    // Si la prueba anterior fue exitosa, ejecutar docker-compose
                    sshCommand remote: [
                        name: 'Windows-Host',  // Nombre de la conexión SSH en Jenkins
                        host: HOST_IP,
                        user: HOST_USER,
                        privateKey: credentials('b1394cb4-bed0-4b78-8686-9303e60e3e4b'),  // ID de credenciales SSH
                        allowAnyHosts: true
                    ], command: """
                        cd ${COMPOSE_DIR}
                        docker-compose up -d
                    """
                }
            }
        }
    }
}