
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqwbkywxuzkdoohwfvoo.supabase.co';
const supabaseKey = process.env //add supabase api key
const supabase = createClient(supabaseUrl, supabaseKey);

// Инициализация Supabase
//const supabaseUrl = 'https://bqwbkywxuzkdoohwfvoo.supabase.com';
//const supabaseKey = 
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
