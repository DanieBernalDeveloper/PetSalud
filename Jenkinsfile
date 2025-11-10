pipeline {
    agent any

    environment {
        // Aquí va la credencial de GITHUB
        GIT_CREDENTIAL_ID = '8b8d32b9-c8bd-4a88-be64-9c862c7dc50c'
        // Aquí va la NUEVA credencial SSH hacia el servidor Windows
        SSH_WINDOWS_ID = 'b1394cb4-bed0-4b78-8686-9303e60e3e4b'
        WINDOWS_HOST = '192.168.20.66'
        WINDOWS_USER = 'facel'
    }

    stages {
        stage('Checkout del código desde GitHub') {
            steps {
                git branch: 'PetSalud_Pre',
                    credentialsId: "${GIT_CREDENTIAL_ID}",
                    url: 'https://github.com/DanieBernalDeveloper/PetSalud'
            }
        }

        stage('Verificar credenciales SSH') {
            steps {
                script {
                    echo '🔍 Verificando conexión SSH con el servidor Windows...'
                    sshCommand remote: [
                        name: 'Windows-Host',
                        host: "${WINDOWS_HOST}",
                        user: "${WINDOWS_USER}",
                        identity: "${SSH_WINDOWS_ID}"
                    ], command: '''
                        echo '✅ Conexión SSH: Exitosa'
                        hostname
                    '''
                }
            }
        }

        stage('Conectar a Windows y ejecutar Docker Compose') {
            steps {
                script {
                    echo '🚀 Ejecutando Docker Compose en el host remoto...'
                    sshCommand remote: [
                        name: 'Windows-Host',
                        host: "${WINDOWS_HOST}",
                        user: "${WINDOWS_USER}",
                        identity: "${SSH_WINDOWS_ID}"
                    ], command: '''
                        cd C:/Users/Facel/Downloads/TEST/PetSalud
                        docker-compose down
                        docker-compose up -d --build
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado correctamente'
        }
        failure {
            echo '❌ Pipeline falló. Revisa las credenciales SSH y conexión al host remoto.'
        }
    }
}