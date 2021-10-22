pipeline {
    
    agent any
    
    stages {
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
      
        stage('Build') {
            steps {
                sh 'ng build'
            }
        }
    }
}
