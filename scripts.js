
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqwbkywxuzkdoohwfvoo.supabase.co';
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxd2JreXd4dXprZG9vaHdmdm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NjE3NDgsImV4cCI6MjA0MDMzNzc0OH0.zGFihxVjN8NpD0OfIR3Lr - hdNo2A3yPV9dl0Xnk7KfM;
const supabase = createClient(supabaseUrl, supabaseKey);

// Инициализация Supabase
//const supabaseUrl = 'https://bqwbkywxuzkdoohwfvoo.supabase.com';
//const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxd2JreXd4dXprZG9vaHdmdm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NjE3NDgsImV4cCI6MjA0MDMzNzc0OH0.zGFihxVjN8NpD0OfIR3Lr-hdNo2A3yPV9dl0Xnk7KfM';
//const supabase = createClient(supabaseUrl, supabaseKey);

// Обработка формы
const form = document.getElementById('astrology-form');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    try {
        const { data, error } = await supabase
            .from('users')
            .insert([
                { name: name, dob: dob }
            ]);

        if (error) {
            throw error;
        }
        alert('Data submitted successfully!');
    } catch (error) {
        console.error('Error:', error.message);
        alert('An error occurred while submitting the data.');
    }
});
