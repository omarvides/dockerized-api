pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            label 'docker'
        }
    } 
    stages {
        stage('Test') {
            when { triggeredBy 'SCMTrigger' }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}