import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <TodoList />
    </div>
  );
}
