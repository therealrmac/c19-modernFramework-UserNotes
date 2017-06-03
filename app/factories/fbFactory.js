"use strict";


app.factory("fbFactory", function($q, $http){
    let getNote= ()=>{
        return $q((resolve,reject)=>{
            $http.get("https://user-notes-f9433.firebaseio.com/notes.json")
            .then((obj)=>{
                let noteCol= obj.data;
                console.log("note data", noteCol);
                resolve(noteCol);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

  const addTask = (obj) => {
    return $q((resolve,reject)=>{
      let newObj= JSON.stringify(obj);
      $http.post("https://user-notes-f9433.firebaseio.com/notes.json",newObj)
      .then(function(data){
        resolve(data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };    
    return {getNote, addTask};
});

