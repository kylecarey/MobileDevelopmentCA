export class Task {
    id: string;
    description: string;
    title: string;
    userId: string;

    public toString(){
        return `
        ID: ${this.id},\n
        Description: ${this.description},\n
        Title: ${this.title},\n
        UserId: ${this.userId}`;
    }
}
