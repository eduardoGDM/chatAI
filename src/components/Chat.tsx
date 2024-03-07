"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat Ai </CardTitle>
        <CardDescription>
          {" "}
          Using Vercel SDK to create a chat bot{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          //.map para mostrar o conteudo das mensagens do chat
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
              {message.role === "user" && ( //se for indicado quem enviou a mensagem, ira confirmar e alterar o icone no caso = user e chat assistant
                <Avatar>
                  <AvatarFallback>edgdm</AvatarFallback>
                  <AvatarImage src="https://github.com/eduardoGDM.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "AI"} :
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help u?"
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
