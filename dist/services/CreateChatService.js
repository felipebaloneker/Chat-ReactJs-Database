"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatService = void 0;
const typeorm_1 = require("typeorm");
const ChatRepository_1 = require("../repositories/ChatRepository");
class CreateChatService {
    execute({ user_one, user_two }) {
        return __awaiter(this, void 0, void 0, function* () {
            const chatRepository = (0, typeorm_1.getCustomRepository)(ChatRepository_1.ChatRepository);
            const chat = chatRepository.create({ user_one, user_two });
            const chatExists = yield chatRepository.findOne({
                where: {
                    user_one,
                    user_two,
                }
            });
            if (user_one == user_two) {
                throw new Error('Incorrect Users');
            }
            const chatExist = yield chatRepository.findOne({
                where: {
                    user_one: user_two,
                    user_two: user_one,
                }
            });
            if (!chatExists && chatExist) {
                return chatExist;
            }
            else if (chatExists && !chatExist) {
                return chatExists;
            }
            else {
                yield chatRepository.save(chat);
            }
            return chat;
        });
    }
}
exports.CreateChatService = CreateChatService;
