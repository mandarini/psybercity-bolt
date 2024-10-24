import { 
  Mail, 
  Github, 
  Twitter, 
  Globe, 
  Linkedin, 
  Award, 
  Briefcase, 
  Code, 
  GraduationCap,
  Languages as LanguagesIcon,
  Mic,
  Heart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Katerina Skroumpelou</h1>
        <h2 className="text-2xl text-secondary">Product Advocate - Google Developer Expert - WTM Ambassador - OSS Contributor</h2>
        
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <Link href="mailto:sk.katherine@gmail.com" className="flex items-center gap-2 hover:text-accent">
            <Mail className="h-4 w-4" />
            <span>sk dot katherine at gmail dot com</span>
          </Link>
          <Link href="https://github.com/mandarini" className="flex items-center gap-2 hover:text-accent">
            <Github className="h-4 w-4" />
            <span>mandarini</span>
          </Link>
          <Link href="https://psyber.city" className="flex items-center gap-2 hover:text-accent">
            <Globe className="h-4 w-4" />
            <span>psyber.city</span>
          </Link>
          <Link href="https://twitter.com/psybercity" className="flex items-center gap-2 hover:text-accent">
            <Twitter className="h-4 w-4" />
            <span>@psybercity</span>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-secondary" />
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Software engineer. Open Source contributor. Google Developer Expert for Angular and the Google Maps Platform. 
            RevApp Co-founder. Tech speaker. AngularAthens meetup co-founder and WTM Ambassador.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-secondary" />
            Core Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Dev Tooling", "Infrastructure", "DX", "TypeScript", "JavaScript"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-secondary" />
            Work Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">Nx - nx.dev</h3>
                <p className="text-secondary">Product Advocate</p>
                <p className="text-muted-foreground mt-2">
                  Advocating for Nx and its ecosystem, creating content, and engaging with the community.
                </p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">September 2024 - now</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">Nx - nx.dev</h3>
                <p className="text-secondary">Senior Engineer</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>July 2020 - October 2022: Consultant/engineer at T-mobile USA</li>
                  <li>July 2020 - September 2024: Nx core team: leading the @nx/storybook package, vite, vue, nuxt, rspack integrations</li>
                  <li>Nx AI team: working on AI solutions for Nx</li>
                  <li>Nx Cloud team: working on our cloud solution nx.app</li>
                </ul>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">July 2020 - September 2024</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">This Dot - thisdot.co</h3>
                <p className="text-secondary">Software Engineer</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Working with clients as a consulting/software engineer on Angular and GCP</li>
                  <li>Worked on creating the Google AMP courses, main client: Tag.bio</li>
                </ul>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2018 - July 2020</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">Upstream - upstreamsystems.com</h3>
                <p className="text-muted-foreground">Software engineer for mobile web applications, working with React and Thymeleaf.</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Aug 2017 - Aug 2018</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">National Centre for Scientific Research "Demokritos"</h3>
                <p className="text-muted-foreground">Web Developer of the Integrated Systems Laboratory of the Institute of Informatics and Telecommunications. Developing applications for European Commision Research programs, based on airport security and fire service fleet management.</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jul 2015 - Aug 2017</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-secondary" />
            Open Source contribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Contributor to Storybook, Nuxt, unjs, other OSS tools</li>
            <li>Contributor to warp workflows - warp ambassador</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-secondary" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">National Technical University of Athens (NTUA)</h3>
                <p className="text-muted-foreground">Post graduate network studies at the School of Electrical and Computer Engineering</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2014 - 2015</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">University College London (UCL)</h3>
                <p className="text-muted-foreground">Master of Research on Advanced Spatial Analysis and Visualisation</p>
                <p className="text-secondary">Degree Classification: Distinction</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2013 - 2014</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">National Technical University of Athens (NTUA)</h3>
                <p className="text-muted-foreground">Master of Architecture (MArch.), Architectural Engineering</p>
                <p className="text-secondary">Grade: 7.8/10</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2007 - 2012</span>
            </div>
          </div>

          <div className="border-l-2 border-secondary/20 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">American College of Greece (Pierce College)</h3>
                <p className="text-muted-foreground">High School</p>
                <p className="text-secondary">Grade: 19.3/20 (Excellent)</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2000 - 2006</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LanguagesIcon className="h-5 w-5 text-secondary" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              { lang: "English", level: "C2" },
              { lang: "French", level: "C2 - bien" },
              { lang: "German", level: "B1 - Gut" },
              { lang: "Greek", level: "Native" }
            ].map(({ lang, level }) => (
              <span key={lang} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                {lang}: {level}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-secondary" />
            Activities & Conferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            I like to speak at local or international community events and conferences, and explain the technologies I use/make through examples. 
            I am actively involved with the web community, in Greece and internationally.
          </p>

          <h3 className="text-lg font-semibold mb-4">Selected examples of activities</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Streamer - paused</h4>
                  <p className="text-muted-foreground">I stream(ed) every two weeks my work on Nx</p>
                </div>
                <span className="text-sm text-muted-foreground">Ongoing</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Influencer for women in technology</h4>
                  <p className="text-muted-foreground">I appear on podcasts, webcasts and events presenting my work, trying to inspire more women to follow a career in technology</p>
                </div>
                <span className="text-sm text-muted-foreground">Ongoing</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Mentoring women in technology</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Women Techmakers Ambassador</li>
                    <li>Part of the Women On Top mentors network</li>
                    <li>Organizing monthly women mentoring events with Tracy Lee</li>
                  </ul>
                </div>
                <span className="text-sm text-muted-foreground">Ongoing</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">GreecehopperJs</h4>
                  <p className="text-muted-foreground">Going around remote areas of Greece, teaching Angular, Google Maps, Web, Firebase</p>
                </div>
                <span className="text-sm text-muted-foreground">Oct 2017 - March 2020</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Teaching</h4>
                  <p className="text-muted-foreground">Teacher/Instructor at Robotics Summer School of National Centre for Scientific Research "Demokritos", teaching kids aged 12-17 the basics of computer programming using C.</p>
                </div>
                <span className="text-sm text-muted-foreground">June 2016 & June 2017</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Teaching Assistance</h4>
                  <p className="text-muted-foreground">Teaching assistance for the course "Computer Network Security" at NTUA, School of Electrical and Computer Engineering</p>
                </div>
                <span className="text-sm text-muted-foreground">May-June 2015</span>
              </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Research Project Team Member</h4>
                  <p className="text-muted-foreground">Team member of the UK-based research project "Cities Unlocked", a collaboration of the Future Cities Catapult, Microsoft, CASA UCL and GuideDogs for the Blind Association.</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2014 - Sep 2014</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}