pipeline {
    stages {
        stage('Test') {
            when { triggeredBy 'SCMTrigger' }
            agent {
                docker {
                    label 'docker'
                    image 'node:lts-alpine'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}