class MyWork {
    title: string;
    description: string;
    cliInstallCommand?: string;
    LinkToLive: string;
    image: string;
    technologies: string[];
    codeLink: string; // both for github, colab
    isLive: string;

    constructor(
        title: string,
        description: string,
        image: string,
        technologies: string[],
        isLive: string,
        LinkToLive?: string,
        codeLink?: string,
        cliInstallCommand?: string
    ) {
        this.title = title;
        this.description = description;
        this.LinkToLive = LinkToLive ?? ""; // for both vercel and streamlit
        this.image = image;
        this.technologies = technologies;
        this.codeLink = codeLink ?? ""; // this is for github, or colab code
        this.cliInstallCommand = cliInstallCommand ?? ""; // for npm projects
        this.isLive = isLive;
    }
}

let myWork: MyWork[] = [
    new MyWork(
        "Who I Am",
        "A personal homepage designed to showcase skills, hobbies, and interests. Features a custom layout with a responsive header, footer, and hero section, styled with custom CSS.",
        "/project images/project2.png",
        ["Next.js", "CSS"],
        "Live",
        "https://01-homepage-component.vercel.app/",
        "https://github.com/M-fatimaZohra/01_homepage_component"
    ),
    new MyWork(
        "Hannah Perfume Catalog",
        "A minimal landing page for the mock brand Hannah's perfume catalog, built with Tailwind CSS and Next.js.",
        "/project images/project3.png",
        ["Tailwind CSS", "Next.js"],
        "Live",
        "https://02-homepage-with-tailwind.vercel.app/",
        "https://github.com/M-fatimaZohra/02_homepage_with_tailwind"
    ),
    new MyWork(
        "UI/UX Figma Design",
        "A food website UI/UX design implemented based on a Figma prototype.",
        "/project images/project4.png",
        ["Figma", "UI/UX Design"],
        "Live",
        "https://01-food-truck.vercel.app/",
        "https://github.com/M-fatimaZohra/01_food_truck.git"
    ),
    new MyWork(
        "Dwell Days",
        "A blog website where users can read blogs, powered by Sanity.io for the backend.",
        "/project images/project6.png",
        ["Sanity.io", "React", "Next.js"],
        "Live",
        "https://blog-website-eight-ebon.vercel.app/",
        "https://github.com/M-fatimaZohra/blog-website.git"
    ),
    new MyWork(
        "Figma Design for Two Specific Breakpoints",
        "Responsive design tailored for 1420px (desktop) and 428px (mobile) screens, ensuring an optimal layout for both.",
        "/project images/project7.png",
        ["Figma", "Responsive Design", "Tailwind CSS"],
        "Live",
        "https://05-figma-design-02.vercel.app/",
        "https://github.com/M-fatimaZohra/05_figma_design_02"
    ),
    new MyWork(
        "Hannah Cosmetics Catalog UI",
        "A catalog UI for the mock cosmetics company Hannah, designed with Next.js and styled for an elegant user experience.",
        "/project images/project8.png",
        ["Next.js", "UI/UX Design"],
        "Live",
        "https://cosmetics-basic-website.vercel.app/",
        "https://github.com/M-fatimaZohra/cosmetics-basic-website"
    ),
    new MyWork(
        "API Integration",
        "A simple website that fetches data from an API and displays it using both CSR and SSR techniques.",
        "/project images/project9.png",
        ["Next.js", "CSR", "SSR"],
        "Live",
        "https://06-csr-ssr.vercel.app/",
        "https://github.com/M-fatimaZohra/06_csr_ssr.git"
    ),
    new MyWork(
        "Resume Builder",
        "A resume builder app where users can input their information and download a PDF version of their resume.",
        "/project images/project10.png",
        ["HTML", "CSS", "JavaScript", "TypeScript"],
        "Live",
        "https://05finalworkofresume.vercel.app/",
        "https://github.com/M-fatimaZohra/00_Resume-Builder"
    ),
    new MyWork(
        "Manzari - First Ever Figma Design",
        "My first Figma design project, implemented using Next.js and Tailwind CSS.",
        "/project images/project11.png",
        ["Figma", "Next.js", "Tailwind CSS"],
        "Live",
        "https://04-figma-design.vercel.app/",
        "https://github.com/M-fatimaZohra/04_figma_design"
    ),
    new MyWork(
        "Unit Converter",
        "A unit converter app that converts values for temperature, mass, frequency, and length.",
        "/project images/project12.png",
        ["UV", "Python", "Streamlit"],
        "Live",
        "https://fz-unit-converter.streamlit.app/",
        "https://github.com/M-fatimaZohra/uv_python_projects/tree/main/01_unit_converter"
    ),
    new MyWork(
        "Password Strength Checker",
        "An app that evaluates the strength of a password entered by the user.",
        "/project images/project13.png",
        ["UV", "Python", "Streamlit"],
        "Live",
        "https://fz-password-strength-meter.streamlit.app/",
        "https://github.com/M-fatimaZohra/uv_python_projects/tree/main/002_password_strength_meter"
    ),
    new MyWork(
        "CSV ⇌ Excel Converter",
        "A tool for converting CSV files to Excel and vice versa, offering a smooth and efficient experience.",
        "/project images/project14.png",
        ["UV", "Python", "Streamlit"],
        "Live",
        "https://fz-growth-mindset-challenge.streamlit.app/",
        "https://github.com/M-fatimaZohra/uv_python_projects/tree/main/004_growth_mindset_challenge"
    ),
    new MyWork(
        "The Password Generator",
        "A password generator app that creates secure passwords for users.",
        "/project images/project15.png",
        ["UV", "Python", "Streamlit"],
        "Live",
        "https://fz-password-generator.streamlit.app/",
        "https://github.com/M-fatimaZohra/uv_python_projects/tree/main/02_password_generator"
    ),
    new MyWork(
        "Time Zone Converter",
        "An app that helps users convert time zones effortlessly.",
        "/project images/project16.png",
        ["UV", "Python", "Streamlit"],
        "Live",
        "https://fz-time-zone.streamlit.app/",
        "https://github.com/M-fatimaZohra/uv_python_projects/tree/main/05_time_zone"
    ),
];

export default myWork;
