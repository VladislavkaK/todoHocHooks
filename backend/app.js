const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const TodoDatabase = require('./src/TodoDatabase');

app.use('/test/main.js', express.static(__dirname + '/test/main.js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3003, () => {
    console.log('App listening on port 3003!');
});

const db = new TodoDatabase('todoapp');

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test/main.html');
});

app.get('/todoapp', (req, res) => {
    const result = { success: true, data: db.getData() };
    res.setHeader('Access-Control-Allow-Origin', '*'); // отключает запрос cors, чтобы можно было сделать запрос
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(result);
});

/**
 * Создание задачи
 */
app.post('/todoapp/task/create', (req, res) => {

    const { title, folder } = req.body;

    db.createTask(title, folder);

    return res.json({ success: true });

});

/**
 * Изменение задачи
 */
app.post('/todoapp/task/update', (req, res) => {

    const { id, title, folder } = req.body;

    try {
        // TODO: Реализовать метод в TodoDatabase
        db.updateTask(id, title, folder);
    } catch (error) {
        return res.json({ success: false, error: { message: 'Не удалось изменить задачу!' } });
    }

    return res.json({ success: true });

});

/**
 * Удаление задачи
 */
app.post('/todoapp/task/delete', (req, res) => {

    const { id } = req.body;

    // TODO: Реализовать метод в TodoDatabase
    // db.deleteTask(id);

});

/**
 * Создание папки
 */
app.post('/todoapp/folder/create', (req, res) => {
    
});

/**
 * Изменение папки
 */
app.post('/todoapp/folder/update', (req, res) => {
    
});

/**
 * Удаление папки
 */
app.post('/todoapp/folder/delete', (req, res) => {
    
});