pipeline {
    agent {
      label 'docker'
        docker {
            image 'node:lts-alpine'
        }
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