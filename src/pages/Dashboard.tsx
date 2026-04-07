import { useNps } from "@/contexts/NpsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, TrendingUp, Frown, Meh, Smile } from "lucide-react";

const Dashboard = () => {
  const { responses } = useNps();

  const total = responses.length;
  const promoters = responses.filter((r) => r.score >= 9).length;
  const passives = responses.filter((r) => r.score >= 7 && r.score <= 8).length;
  const detractors = responses.filter((r) => r.score <= 6).length;

  const npsScore = total === 0 ? 0 : Math.round(((promoters - detractors) / total) * 100);

  const getCategory = (score: number) => {
    if (score >= 9) return { label: "Promoter", icon: Smile, color: "text-green-600 dark:text-green-500", bg: "bg-green-500/10" };
    if (score >= 7) return { label: "Passive", icon: Meh, color: "text-yellow-600 dark:text-yellow-500", bg: "bg-yellow-500/10" };
    return { label: "Detractor", icon: Frown, color: "text-red-600 dark:text-red-500", bg: "bg-red-500/10" };
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Overview of your Net Promoter Score and recent customer feedback.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Net Promoter Score</CardTitle>
            <div className={`p-2 rounded-full ${npsScore > 0 ? 'bg-green-500/10 text-green-600' : npsScore < 0 ? 'bg-red-500/10 text-red-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
              <TrendingUp className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{npsScore}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Scores range from -100 to 100
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
            <div className="p-2 rounded-full bg-blue-500/10 text-blue-600">
              <Users className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{total}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total feedback collected
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Promoters</CardTitle>
            <div className="p-2 rounded-full bg-green-500/10 text-green-600">
              <Smile className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-500">{promoters}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {total > 0 ? Math.round((promoters / total) * 100) : 0}% of total (Score 9-10)
            </p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Detractors</CardTitle>
            <div className="p-2 rounded-full bg-red-500/10 text-red-600">
              <Frown className="w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 dark:text-red-500">{detractors}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {total > 0 ? Math.round((detractors / total) * 100) : 0}% of total (Score 0-6)
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border shadow-sm overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {responses.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No feedback collected yet.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[100px] text-center">Score</TableHead>
                  <TableHead className="w-[150px]">Category</TableHead>
                  <TableHead>Feedback</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {responses.map((response) => {
                  const category = getCategory(response.score);
                  const Icon = category.icon;
                  return (
                    <TableRow key={response.id}>
                      <TableCell className="font-semibold text-center text-lg">
                        {response.score}
                      </TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${category.bg} ${category.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {category.label}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[250px] sm:max-w-[400px]">
                        {response.feedback ? (
                          <span className="truncate block">{response.feedback}</span>
                        ) : (
                          <span className="text-muted-foreground italic text-sm">No comment provided</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground text-sm whitespace-nowrap">
                        {new Date(response.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
