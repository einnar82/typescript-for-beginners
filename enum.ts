// for constant declaration
enum Status {
  FAILED = 0,
  SUCCESS = 1
}

class Chat {
  public message: string;
  public status: Status;
  constructor(message: string, status: Status) {
    this.message = message;
    this.status = status;
  }

  public send = (): string => {
    if (this.status === Status.SUCCESS) {
      return 'success'
    }
    return 'failed';
  }
}

const chat = new Chat('hi', 1);

console.log(chat.send());