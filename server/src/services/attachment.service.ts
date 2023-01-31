import Attachment, { AttachmentDocument } from "../models/Attachment";
import { NotFoundError } from "../helpers/apiError";

const create = async (
  attachment: AttachmentDocument
): Promise<AttachmentDocument> => {
  return attachment.save();
};

const findById = async (attachmentId: string): Promise<AttachmentDocument> => {
  const foundAttachment = await Attachment.findById(attachmentId);

  if (!foundAttachment) {
    throw new NotFoundError(`Attachment ${attachmentId} not found`);
  }

  return foundAttachment;
};

const findAll = async (): Promise<AttachmentDocument[]> => {
  return Attachment.find().sort({ lastName: 1 });
};

const update = async (
  attachmentId: string,
  update: Partial<AttachmentDocument>
): Promise<AttachmentDocument | null> => {
  const foundAttachment = await Attachment.findByIdAndUpdate(
    attachmentId,
    update,
    {
      new: true,
    }
  );

  if (!foundAttachment) {
    throw new NotFoundError(`Attachment ${attachmentId} not found`);
  }

  return foundAttachment;
};

const deleteAttachment = async (
  attachmentId: string
): Promise<AttachmentDocument | null> => {
  const foundAttachment = Attachment.findByIdAndDelete(attachmentId);

  if (!foundAttachment) {
    throw new NotFoundError(`Attachment ${attachmentId} not found`);
  }

  return foundAttachment;
};

export default {
  create,
  findById,
  findAll,
  update,
  deleteAttachment,
};
