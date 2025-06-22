import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

interface Message {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
}

interface User {
  id: number;
  username: string;
  avatar: string;
  isOnline: boolean;
}

interface Server {
  id: number;
  name: string;
  avatar: string;
  messageCount: number;
}

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
@ViewChild('chatMessages', { static: false }) chatMessagesRef!: ElementRef;
  
  // Propiedades del componente
  messageInput: string = '';
  currentUser: User = {
    id: 1,
    username: 'Wagner',
    avatar: 'https://i.pinimg.com/736x/7c/19/1f/7c191f15ddcbf0c39fc8ae80200f86db.jpg',
    isOnline: true
  };

  // Lista de servidores
  servers: Server[] = [
    { id: 1, name: 'Servidor 1', avatar: 'https://i.pinimg.com/736x/2f/ad/5c/2fad5c77ae6b82e6774b888473e493f9.jpg', messageCount: 8 },
    { id: 2, name: 'Servidor 2', avatar: 'https://i.pinimg.com/736x/ac/96/66/ac9666d9b5110936e861d1b3d12f16cf.jpg', messageCount: 50 },
    { id: 3, name: 'Servidor 3', avatar: 'https://i.pinimg.com/736x/e7/96/79/e79679598e98be91cb158891e21f523f.jpg', messageCount: 120 },
    { id: 4, name: 'Servidor 4', avatar: 'https://i.pinimg.com/736x/30/42/1a/30421a5d8412f197334f09acd570ca64.jpg', messageCount: 20 },
    { id: 5, name: 'Servidor 5', avatar: 'https://i.pinimg.com/736x/94/f3/92/94f392ab7c3e9013973e40a781be9e36.jpg', messageCount: 25 }
  ];

  // Lista de usuarios
  users: User[] = [
    { id: 1, username: 'Joseph', avatar: 'https://i.pinimg.com/736x/a3/5a/86/a35a86c5982f0bec0885b71df7a23dde.jpg', isOnline: true },
    { id: 2, username: 'Franco', avatar: 'https://i.pinimg.com/736x/2f/43/98/2f43988f7513271a49b981bd00efe187.jpg', isOnline: true },
    { id: 3, username: 'Carlos', avatar: 'https://i.pinimg.com/736x/8f/e8/74/8fe8743da9f20c37a66db86260ca53c8.jpg', isOnline: true },
    { id: 3, username: 'Rodrigo', avatar: 'https://i.pinimg.com/736x/66/27/de/6627dea04e9e1c05dcaa43ed785a7944.jpg', isOnline: true }
  ];

  // Lista de mensajes
  messages: Message[] = [
    {
      id: 1,
      username: 'Carlos',
      avatar: 'https://i.pinimg.com/736x/8f/e8/74/8fe8743da9f20c37a66db86260ca53c8.jpg',
      content: 'Hola',
      timestamp: '20/06/2025'
    }

  ];

  // Usuario actual del chat
  currentChatUser: string = 'Carlos';
  searchQuery: string = '';
  conversationSearch: string = '';

  constructor() {}

  // Método para enviar mensaje
  sendMessage(): void {
    if (this.messageInput.trim() !== '') {
      const newMessage: Message = {
        id: this.messages.length + 1,
        username: this.currentUser.username,
        avatar: this.currentUser.avatar,
        content: this.messageInput.trim(),
        timestamp: this.getCurrentTimestamp()
      };

      this.messages.push(newMessage);
      this.messageInput = '';
      
      // Scroll automático hacia abajo
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }

  // Método para obtener timestamp actual
  private getCurrentTimestamp(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  }

  // Método para hacer scroll hacia abajo en el chat
  private scrollToBottom(): void {
    if (this.chatMessagesRef) {
      const element = this.chatMessagesRef.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  // Método para manejar el envío por tecla Enter
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  // Método para seleccionar usuario del chat
  selectUser(username: string): void {
    this.currentChatUser = username;
    // Aquí podrías cargar los mensajes específicos del usuario
  }

  // Método para seleccionar servidor
  selectServer(server: Server): void {
    console.log('Selected server:', server.name);
    // Aquí podrías cambiar el contexto del chat al servidor seleccionado
  }

  // Método para agregar nuevo usuario
  addUser(): void {
    console.log('Add user clicked');
    // Aquí podrías implementar la lógica para agregar un nuevo usuario
  }

  // Métodos para las funcionalidades del header del chat
  makeCall(): void {
    console.log('Making call...');
  }

  startVideo(): void {
    console.log('Starting video...');
  }

  pinMessage(): void {
    console.log('Pinning message...');
  }

  addUserToChat(): void {
    console.log('Adding user to chat...');
  }

  openInbox(): void {
    console.log('Opening inbox...');
  }

  openHelp(): void {
    console.log('Opening help...');
  }

  // Métodos para las funcionalidades del input del chat
  addFile(): void {
    console.log('Adding file...');
  }

  sendGift(): void {
    console.log('Sending gift...');
  }

  addImage(): void {
    console.log('Adding image...');
  }

  addEmoji(): void {
    console.log('Adding emoji...');
  }

  // Métodos para el perfil del usuario
  toggleMicrophone(): void {
    console.log('Toggle microphone');
  }

  toggleHeadset(): void {
    console.log('Toggle headset');
  }

  openSettings(): void {
    console.log('Opening settings');
  }
  
}
