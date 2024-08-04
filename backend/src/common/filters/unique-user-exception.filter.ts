import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(Prisma.PrismaClientKnownRequestError)
export class UniqueUserExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;

        const message = exception.message;

        const constraintMessage = message.substring(
          message.indexOf('Unique constraint failed on the fields:'),
        );
        const failedField = constraintMessage
          .substring(constraintMessage.indexOf('('))
          .replace(/[`()]/g, '');

        const errorMessage = `${failedField.charAt(0).toUpperCase() + failedField.slice(1)} is not unique`;

        response.status(status).json({
          statusCode: status,
          message: errorMessage,
          conflict: failedField,
        });
        break;
      }
      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
