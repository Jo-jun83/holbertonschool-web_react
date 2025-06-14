interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string) => {
    let firstLetter = firstName.charAt(0);
    return(`${firstLetter}. ${lastName}`)
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string; 
}

interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework() {
        return("Currently working");
    }

    displayName() {
        return this.firstName;
    }
}
