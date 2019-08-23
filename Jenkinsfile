pipeline {
  agent {
    docker {
      image 'node:lts'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
}