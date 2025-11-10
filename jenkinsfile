pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Deploy') {
      steps {
        // Ejecutar docker compose en el workspace del job
        dir("${WORKSPACE}") {
          sh '''
            set -e
            docker compose up -d
            docker compose ps
          '''
        }
      }
    }
  }

  post {
    success {
      echo "✅ Despliegue completado correctamente."
    }
    failure {
      echo "❌ Fallo en el despliegue. Revisa los logs."
    }
  }
}