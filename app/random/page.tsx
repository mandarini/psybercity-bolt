import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Random() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Random Thoughts</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interesting Fact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
             If I like something, I can get repetitive.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interesting Fact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I've climbed Mount Olympus 3 times!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Read</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Cryptonomicon (for the 2nd time).
            </p>
          </CardContent>
        </Card>
           <Card>
          <CardHeader>
            <CardTitle>Current Obsession</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              bolt.new omg
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}