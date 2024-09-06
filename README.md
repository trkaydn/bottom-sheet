# Responsive Bottom Sheet Modal

A simple, responsive bottom sheet modal structure with drag-to-resize functionality.

## Usage

1. **Include CSS and JS files**:
   Add the following to your HTML file:
   
   ```html
   <link rel="stylesheet" href="bottom-sheet.css">
   <script src="bottom-sheet.js" defer></script>

2. **HTML Structure:**
    Create a button to trigger the modal and the modal itself:
    ```html
    <button class="show-modal" data-target="#bottomSheet1">Show Bottom Sheet</button>
    
    <div class="bottom-sheet" id="bottomSheet1">
        <div class="sheet-overlay"></div>
        <div class="content">
            <div class="header">
                <div class="drag-icon"><span></span></div>
            </div>
            <div class="body">
                <h2>Modal Content</h2>
                <p>This is the bottom sheet modal content.</p>
            </div>
        </div>
    </div>

3. **Demo:**
    For a full example and usage, visit the [repository](https://github.com/trkaydn/bottom-sheet).
   
4. **Desktop and Mobile Views:**
<p align="center">
  <img src="images/example-1.jpg" alt="desktop" height="350px">
  <img src="images/example-2.jpg" alt="mobile" height="350px">
</p>
