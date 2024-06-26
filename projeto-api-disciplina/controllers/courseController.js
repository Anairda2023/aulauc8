
const Course = require('../models/course');
const courseModel = new Course();
const path = require ('path');

   
class CourseController {
    async getAllCourses(req, res) {
        
            const curso = await courseModel.getAllCourses();
            res.json(curso);
        
    }
    async createCourse(req, res) {
        const { name, description } = req.body;
        try{
            await courseModel.createCourse(name,description);
        
        res.status(201).redirect('/');
        }catch (error){
            console.error('Erro ao cadastrar curso:', error);
            res.status(500).json({error:'Erro interno ao cadastrar curso.'});
        }
    }
    async getCourseById(req, res) {
        const courseId = req.params.id;
        const course = await courseModel.getCourseById(courseId);
        res.json(course);
    }

    async deleteCourse(req, res) {
        const courseId = req.params.id;
        try{
            await courseModel.deleteCourse(courseId);
        
        res.status(200).json({message: 'Curso removido com sucesso'});
        }catch (error){
            console.error('Erro ao remover o  curso:', error);
            res.status(500).json({error:'Erro interno ao remover curso.'});
        }
       
      
    }
    formEditCourse(req, res){
        const courseId = req.params.id;
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html'));

    }
    async updateCourse(req, res) {
        const courseId = req.params.id;
        const { name, description } = req.body;
        try{
            await courseModel.updateCourse(courseId, name, description);
        
        res.status(200).json({message: 'Curso atualizado com sucesso'});
        }catch (error){
            console.error('Erro ao atualizar o  curso:', error);
            res.status(500).json({error:'Erro interno ao atualizar curso.'});
        }
}

}


module.exports = new CourseController();