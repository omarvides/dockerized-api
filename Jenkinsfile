pipeline {
    agent { docker 'node:lts-alpine' } 
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