"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const contactInfo = {
    name: "Katerina Skroumpelou",
    email: "sk.katherine@gmail.com",
    workEmail: "katerina@nrwl.io",
    location: "Athens, Greece",
    title: "Product Advocate - Senior Engineer",
  };

  // Generate vCard data
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
EMAIL:${contactInfo.email}
EMAIL;TYPE=WORK:${contactInfo.workEmail}
ADR;TYPE=WORK:;;${contactInfo.location}
END:VCARD`;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-muted-foreground">
          Scan the QR code below to save my contact information to your phone,
          or view the details below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6 flex items-center justify-center bg-white dark:bg-zinc-950">
          <QRCodeSVG
            value={vCardData}
            size={200}
            level="H"
            includeMargin={true}
            className="dark:bg-white dark:p-2 dark:rounded-lg"
          />
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <User className="h-5 w-5 text-primary" />
              <span>{contactInfo.name}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <a href="#" className="hover:text-accent transition-colors">
                sk dot katherine at gmail
              </a>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href={`mailto:${contactInfo.workEmail}`}
                className="hover:text-accent transition-colors"
              >
                {contactInfo.workEmail}
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{contactInfo.location}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => {
            const blob = new Blob([vCardData], { type: "text/vcard" });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "katerina-skroumpelou.vcf");
            document.body.appendChild(link);
            link.click();
            link.remove();
          }}
          className="bg-primary hover:bg-primary/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Download vCard
        </Button>
      </div>
    </div>
  );
}
