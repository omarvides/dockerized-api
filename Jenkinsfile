pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            docker 'my-defined-label'
        }
    } 
    stages {
        stage('Test') {
            steps {
                label 'docker'
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}