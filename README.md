# flashcard-app

## CSV File Format for Questions

When importing questions from a CSV file, each row should represent **one question**.  
You have two options for the number of possible answers:

1. **4 total options** + 1 correct answer  
   - **6 columns** per row  
2. **5 total options** + 1 correct answer  
   - **7 columns** per row

### **Column Order**
1. **Column 1**: The question text  
2. **Columns 2–5** (or 2–6 for 5 options): Each column is one possible answer  
3. **Last Column**: The correct answer (must match exactly one of the previous options)

### **Example: 4 Options + 1 Correct**
```csv
What is this author's favorite color?; Blue; Green; Brown; Black; Blue
```
In the above example, Blue would be the right answer. Happy studying!

Feel free to provide feedback here!
https://forms.gle/1LJrkAB3Akcwhtvv8 

Tutorial: https://docs.google.com/document/d/1TMCf07BDj59EelC62MT8sZdGAeXbrYR_cW1Ijk8vTuY/edit?usp=sharing
