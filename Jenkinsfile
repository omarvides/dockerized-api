pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Test LTS') {
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
        stage('Test Maintenance') {
            when { triggeredBy 'SCMTrigger' }
            agent {
                docker {
                    label 'docker'
                    image 'node:8-alpine'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}