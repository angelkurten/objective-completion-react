# OC Task List

This project provides a simple HTML page that calculates **OC** (Objective Completion) for a set of tasks. Each task has:

- **Priority (P)**: A value in the range \([0, 1]\) indicating the importance of the task.
- **Completion (C)**: A value in the range \([0, 1]\) representing how much of that task is completed.

Finally, an **Impact (I)** value represents the total benefit or effect on the business if all tasks were fully completed.

## How it Works

1. **Add Tasks**  
   Click **Add Task** to create a new row. Each row has:
   - A label (e.g., “Task #1”).
   - A **Priority** (P) input (0–1).
   - A **Completion** (C) input (0–1).
   - A **Remove** button to delete the task if you no longer need it.

2. **Set Impact**  
   Enter the overall business **Impact (I)** in the provided box (must be a positive number).

3. **Calculate OC**  
   Click **Calculate OC** to compute the **Objective Completion** using the formula:

   \[
   \text{OC} \;=\; I \;\times\;
   \frac{\sum_{i=1}^{n}(P_i \times C_i)}
        {\sum_{i=1}^{n} P_i}.
   \]

   - \(P_i\): The priority of task \(i\)  
   - \(C_i\): The completion level of task \(i\)  
   - \(I\): The overall impact on the business

4. **View the Result**  
   The application displays the **OC** value, rounded to two decimals.

## Why Use This Formula?

- It ensures that **high-priority tasks** (larger \(P_i\)) influence the final score more significantly.
- The **normalization** by \(\sum P_i\) guarantees that if all tasks are fully completed (\(C_i = 1\)), the **OC** will be exactly **I**.
- If tasks are partially done or have lower priority, the score will be proportionally less than **I**.

## Getting Started

1. **Clone or Download** this repository.
2. **Open `index.html`** in your favorite web browser.
3. **Add some tasks** with Priority and Completion values, **set the Impact**, and **click “Calculate OC.”**

That’s it! You’ll see the resulting **OC** based on the tasks you added.

## Dependencies

- [MathJax](https://www.mathjax.org/): Used via CDN to render the LaTeX formula on the page (already included in the `<script>` tags).

No additional libraries or build steps are required. Just open the HTML file and it should work out of the box.

## License

This project is released under the [MIT License](LICENSE). Feel free to fork or copy for your own use. 
