pipeline {
    agent { docker 'node:lts-alpine' } 
    stages {
        stage('Test') {
            label 'docker'
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}