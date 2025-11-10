pipeline {
    agent any

    environment {
        // Definimos variables de entorno para la IP, el usuario y la ruta del proyecto en Windows
        HOST_IP = "192.168.22.66"  // Dirección IP de tu host Windows
        HOST_USER = "facel"   // Usuario de Windows
        COMPOSE_DIR = "C:/Users/Facel/Downloads/TEST/PetSalud"  // Ruta en Windows donde está el archivo docker-compose.yml
    }

    stages {
        stage('Conectar a Windows y ejecutar Docker Compose') {
            steps {
                script {
                    // Comando SSH para conectarse a Windows y ejecutar docker-compose
                    sshCommand remote: [
                        name: 'Windows-Host',  // Nombre de la conexión SSH en Jenkins
                        host: HOST_IP,
                        user: HOST_USER,
                        privateKey: credentials('tu-ssh-private-key-id')  // Asegúrarse de tener las credenciales de SSH configuradas en Jenkins
                    ], command: """
                        cd ${COMPOSE_DIR}
                        docker-compose up -d
                    """
                }
            }
        }
    }
}