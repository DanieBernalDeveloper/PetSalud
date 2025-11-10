pipeline {
    agent any

    environment {
        // Definimos variables de entorno para la IP, el usuario y la ruta del proyecto en Windows
        HOST_IP = "192.168.x.x"  // Dirección IP de tu host Windows
        HOST_USER = "TuUsuario"   // Usuario de Windows
        COMPOSE_DIR = "C:/ruta/a/tu/proyecto"  // Ruta en Windows donde está tu archivo docker-compose.yml
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
                        privateKey: credentials('tu-ssh-private-key-id'),  // Asegúrate de tener las credenciales de SSH configuradas en Jenkins
                        allowAnyHosts: true   // Aquí está la adición de allowAnyHosts: true
                    ], command: """
                        cd ${COMPOSE_DIR}
                        docker-compose up -d
                    """
                }
            }
        }
    }
}