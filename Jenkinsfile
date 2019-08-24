pipeline {
    agent {
      label 'docker'
    } 
    stages {
        stage('Test') {
            when { triggeredBy 'SCMTrigger' }
            agent {
                docker {
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