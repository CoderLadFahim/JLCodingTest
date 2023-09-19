##### This piece of software can be used to create, edit and upload simple documents, directly from the web.

The application consists of two modules:  

    * Compose
    * Upload

### Compose 

Features:

    * Text and Image insertion on a blank canvas
    * Dragging the canvas elements anywhere within the canvas
    * Values and coordinates retention on refresh
    * Document printing/downloading as PDFs
    * Document preview
    * Zoom in and out anywhere in the canvas 
    * Coordinates display on any given element in the canvas
    * Intuitive UI

### Upload

Features:
    
    * Upload documens including PDFs
    * Lists the uploaded documents
    * Stores a shallow copy of documents in localStorage
    * Intuitive UI here as well


# Setup

Just

```
npm install
npm run dev
```

and you should be good to go


# Things to do
* Coords should clear when the document clears
* Store the uploaded files in localStorage
* Enforce a limit of 1 megabytes for PDF uploading
* Look into dragging and dropping of selected tools (if not possible, implement a better UX with cursor indication)
* Reproduce the sidebar disappearing error
* Write some good documentation this time
