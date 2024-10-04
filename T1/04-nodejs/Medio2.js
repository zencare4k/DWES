function getStudentsWithNamesAndTopNotes(students) {
    return students.map(student => ({
        name: student.name,
        topNote: student.notas && student.notas.length > 0 ? Math.max(...student.notas) : 0 
    }));
}

let alumno = {
    name: "Carlos",
    school: "ADAITS",
    notas: [5, 6, 7] 
};

console.log(getStudentsWithNamesAndTopNotes([alumno]));

