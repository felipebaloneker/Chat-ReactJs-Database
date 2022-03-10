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
exports.CreateMessageService = void 0;
const typeorm_1 = require("typeorm");
const MessageRepository_1 = require("../repositories/MessageRepository");
class CreateMessageService {
    execute({ author_id, chat_id, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageRepository = (0, typeorm_1.getCustomRepository)(MessageRepository_1.MessageRepository);
            const point = messageRepository.create({
                author_id,
                chat_id,
                message,
            });
            yield messageRepository.save(point);
            return point;
        });
    }
}
exports.CreateMessageService = CreateMessageService;
