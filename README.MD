# Smart Parking Management System with License Plate Detection
### Project Evolution Roadmap

| Raspberry PI Version | Local Monolith | Modular Local Monolith | Application | Fullstack Web App | Fullstack Web App with Go | Dockerized Web App | 
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  [![Completed](https://img.shields.io/badge/Completed-a5d6a7?style=for-the-badge)](#) | [![Completed](https://img.shields.io/badge/Completed-a5d6a7?style=for-the-badge)](#) | [![Current](https://img.shields.io/badge/Current-2e7d32?style=for-the-badge)](#) | [![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) | [![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |[![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |[![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |

# Modular Monolith

Modular Monolithic Design in compliance with OOP Design paradigms 

-----------------------------------------------------------------------------------------------------

## IMPROVEMENTS OVER LOCAL MONOLITH 

Refactored Monolithic Script into Modular Monolithic script with OOP design paradigms, classes and functions for easier maintainability

-----------------------------------------------------------------------------------------------------

### AUTOMATIC LICENSE PLATE DETECTION

Integrated YOLO_Monolith for Automatic License Number Detection

Implemented using YOLO, OpenCV, EasyOCR and Pillow

Includes automatic fallbacks with custom image enhancement pipeline against confidence score checks


-----------------------------------------------------------------------------------------------------

### QUICK DEV PATCHES

#### Tools and Technologies

YOLO, EasyOCR, OpenCV, Pillow, RapidOCR

#### CONFIGURATIONS

i. Folder Structure
    
    root/
    -   .gitignore
    -   README.md
    +---.vscode/
           settings.json
    -   LicensePlateDetector.py
    -   yolo26n.pt   
    +---venv/



iii. Environment Setup
    
-> Clone the repository/branch using command: 

    https://github.com/SamuelDevadass/Smart-Parking-Management-System.git
    
-> Create venv using command:
    
    python -m create venv venv
    
-> Activate the venv
    
-> Install requirements using command:

    pip install -r requirements.txt

  - (Incase required, install other requirements from requirements.bak file)

    
-> Run the application:

   - Navigate to the backend and run:

    python -m LicensePlateDetector.py

   - Navigate to the frontend and run:

    npm run dev

#### PRO TIPS

i. Ensure the .gitignore contains the lines:

        frame*.jpg
        202*/
        202*/*.jpg
      
This ensures the folders created during YOLO capture cycles are not tracked by Git

ii. venv startup:
    
        -> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Remote
    
        -> ./venv/scripts/Activate

iii. Pipreqs library 
    
To add only those libraries actually imported in the files run the command:

    python -m pipreqs.pipreqs . --force

# CITATION

If you use this project, please credit https://github.com/SamuelDevadass/Smart-Parking-Management-System

Citation: [Smart Parking Management System / LocalMonolith], Samuel Devadass (2026). 

Available at: [https://github.com/SamuelDevadass/Smart-Parking-Management-System/tree/LocalMonolith]

-----------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------

# Smart Parking Management System with License Plate Detection
### Project Evolution Roadmap

| Raspberry PI Version | Local Monolith | Modular Local Monolith | Application | Fullstack Web App | Fullstack Web App with Go | Dockerized Web App | 
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  [![Completed](https://img.shields.io/badge/Completed-a5d6a7?style=for-the-badge)](#)  | [![Current](https://img.shields.io/badge/Current-2e7d32?style=for-the-badge)](#) | [![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) | [![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |[![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |[![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) | [![Upcoming](https://img.shields.io/badge/Upcoming-757575?style=for-the-badge)](#) |

# Local Monolith

Local Monolithic Design
-----------------------------------------------------------------------------------------------------

### AUTOMATIC LICENSE PLATE DETECTION

Implemented YOLO_Monolith for Automatic License Number Detection

Designed using YOLO, OpenCV, EasyOCR and Pillow

Includes automatic fallbacks with custom image enhancement pipeline against confidence score checks

# CITATION

If you use this project, please credit https://github.com/SamuelDevadass/Smart-Parking-Management-System

Citation: [Smart Parking Management System / LocalMonolith], Samuel Devadass (2026). 

Available at: [https://github.com/SamuelDevadass/Smart-Parking-Management-System/tree/LocalMonolith]

