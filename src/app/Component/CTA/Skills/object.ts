class Skills {
    name: string;
    icon: string;
    description: string;
    
    constructor(name: string, icon: string, description: string) {
        this.name = name;
        this.icon = icon;
        this.description = description;
    }
}

const skillsFramework: Skills[] = [
    new Skills("Next.js", "Next.js.svg", "React Framework"),
    new Skills("Streamlit", "Streamlit.svg", "Data Apps"),
    new Skills("HTML", "HTML5.svg", "Markup Language"),
    new Skills("CSS", "CSS3.svg", "Style Sheets"),
    new Skills("JavaScript", "JavaScript.svg", "Web Programming"),
    new Skills("TypeScript", "TypeScript.svg", "Typed JavaScript"),
    new Skills("Python", "Python.svg", "Versatile programming language"),
    new Skills("Tailwind CSS", "Tailwind CSS.svg", "Utility-first CSS framework"),
    new Skills("shadcn/ui", "Shadcn ui.svg", "UI Components"),
    new Skills("Sanity", "Sanity.svg", "Structured content platform"),
    new Skills("npm", "NPM.svg", "JavaScript package manager"),
    new Skills("uv", "UV.svg", "Python package manager"),
    new Skills("FastAPI", "FastAPI.svg", "High-performance APIs")
];

export default skillsFramework

