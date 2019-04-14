const Database = require('./database');

class TodoDatabase extends Database { 

    constructor(databaseKey) {

        super(databaseKey);

    }

    createTask(title, folder) {

        this._data.tasks.push({
            title,
            folder
        });

        this.save();

    }

    updateTask(id, title, folder) {
        // id - это индекс задачи в todoapp.json -> tasks: []
        // title - новый заголовок
        // folder - имя папки
        let itemsNew = this._data.tasks.map((item, i) => {
            if (i == id) {
                return {title: title, folder: folder}
            }

           return item;
        })

        this._data.tasks = itemsNew;
        
        this.save();

    }

    deleteTask(id) {
        let items = this._data.tasks.filter((item, i) => i != id);

        this._data.tasks = items;

        this.save();
    }

}

module.exports = TodoDatabase;
