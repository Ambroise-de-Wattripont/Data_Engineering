const { Pool } = require('pg');

// Configure the database connection
const dbConfig = {
  user: 'postgres',
  password: 'seb1206T',
  host: 'localhost',
  port: '5432',
  database: 'project',
};

// Create a new database pool
const pool = new Pool(dbConfig);

// Perform a database operation
const bcrypt = require('bcrypt');

const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }
  // Use the generated salt
});


async function sign_up(new_user, Nom, Prenom, password){
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return;
        }
        // Use the generated hash
      });
      const Password =  hash;
    if (new_user = "Demandeur"){;
        const insertQuery = 'INSERT INTO Demandeur (Nom, Prenom, Password) VALUES ($1, $2, $3)';
    }
    if (new_user = "Employeur"){
        const insertQuery = 'INSERT INTO Employeur (Nom, Prenom, Password) VALUES ($1, $2, $3)';
    }
    if (err) {
        console.error('Nom ou Prenom incorecte:', err);
        return;
    }
}

async function login (type, Nom, Prenom, Password){
    if (type = "Demandeur") {
        try {
            const query = 'SELECT Nom, Prenom, Password FROM Demandeur WHERE Nom = $1 AND Prenom = $2';
            const result = await pool.query(query, [Nom, Prenom]);
            const user = result.rows[0];

            if (!user){
                return 'User not found';
            }

            const passwordMatch = await bcrypt.compare(Password, user.Password);

            if (passwordMatch) {
                return 'Login successful';
            }
            else {
                return 'Incorrect Password';
            }

        }
        catch (error){
            console.error('Error during login: ', error);
            return "Login failed";
        }
    }
    if (type = "Employeur") {
        try {
            const query = 'SELECT Nom, Prenom, Password FROM Employeur WHERE Nom = $1 AND Prenom = $2';
            const result = await pool.query(query, [Nom, Prenom]);
            const user = result.rows[0];

            if (!user){
                return 'User not found';
            }

            const passwordMatch = await bcrypt.compare(Password, user.Password);

            if (passwordMatch) {
                return 'Login successful';
            }
            else {
                return 'Incorrect Password';
            }

        }
        catch (error){
            console.error('Error during login: ', error);
            return "Login failed";
        }
    }
}

async function insertOrUpdateMotivation(Nom, Prenom, text) {
    try {
      // Check if the record already exists in the database
      let query;
      let values;
      query = 'UPDATE Demandeur SET Motivation = $3 WHERE Nom = $1 AND Prenom = $2';
      values = [Nom, Prenom, text];

      await pool.query(query, values);
      
      console.log('Text inserted or updated successfully!');
    } catch (error) {
      console.error('Error inserting or updating text:', error);
    }
  }
  async function insertOrUpdateCompetences(Nom, Prenom, text) {
    try {
      // Check if the record already exists in the database
      let query;
      let values;
      query = 'UPDATE Demandeur SET Competences = $3 WHERE Nom = $1 AND Prenom = $2';
      values = [Nom, Prenom, text];
      await pool.query(query, values);
      console.log('Text inserted or updated successfully!');
    } catch (error) {
      console.error('Error inserting or updating text:', error);
    }
  }
  async function insertOrUpdateEntreprise(Nom, Prenom, text) {
    try {
      // Check if the record already exists in the database
      let query;
      let values;
      query = 'UPDATE Employeur SET Entreprise = $3 WHERE Nom = $1 AND Prenom = $2';
      values = [Nom, Prenom, text];
      await pool.query(query, values);
      console.log('Text inserted or updated successfully!');
    } catch (error) {
      console.error('Error inserting or updating text:', error);
    }
  }
async function createAnnonce(Titre, Employeur, Description){
    const query = 'INSERT INTO Annonce (Titre, Employeur, Description) VALUES ($1, $2, $3)';
    await pool.query(query, [Titre, Employeur, Description]);
}

// Close the database pool when done
pool.end();