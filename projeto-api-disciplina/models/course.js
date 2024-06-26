const db = require('../database/db');
class Course {
    //método para retornar todos os cursos

        async getAllCourses(){
        return new Promise ((resolve, reject)=>{
            db.query('select * from course', (error, results)=>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    return
                }else{
                    resolve(results);
                }    
            });
    
        });


    }

    

    async createCourse(name, description){
        
            return new Promise((resolve, reject) => {
                db.query('INSERT INTO course (name, description) VALUES (?, ?)', [name, description], (error, results) => {
                    if (error) {
                        console.log('Erro ao executar o script sql');
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
    }
    

    
    async getCourseById(id){
        return new Promise ((resolve, reject)=>{
            db.query('select * from course where id=?', [id],(error, results)=>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                }else{
                    resolve(results);
                }    
            });
    
        });
        
    }
    
    async deleteCourse(id){
        return new Promise ((resolve, reject)=>{
            db.query('delete from course where id=?', [id],(error, results)=>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                }else{
                    resolve(results);
                }    
            });
    
        });
    }

    updateCourse(id,name, description){
        return new Promise ((resolve, reject)=>{
            db.query('update course set name=?, description=?, where id=?', [id],(error, results)=>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                }else{
                    resolve(results);
                }    
            });
    
        });

    }

    async listagemCursos(){
        return new Promise ((resolve, reject)=>{
            db.query('select * from course', (error, results)=>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    return
                }else{
                    resolve(results);
                }    
            });
    
        });
    }
}
module.exports = Course;



