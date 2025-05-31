// Déclaration de types avec une propriété "brand" pour les distinguer

interface MajorCredits {
    credits: number;
    brand: "major";
  }
  
  interface MinorCredits {
    credits: number;
    brand: "minor";
  }
  
  // Fonction pour additionner deux MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "major"
    };
  }
  
  // Fonction pour additionner deux MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "minor"
    };
  }
  