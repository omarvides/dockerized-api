pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            label 'docker'
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