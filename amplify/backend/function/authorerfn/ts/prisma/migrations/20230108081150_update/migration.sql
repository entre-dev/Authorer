-- CreateTable
CREATE TABLE "Accept" (
    "id" STRING NOT NULL,
    "userId" INT4 NOT NULL,
    "cliendId" STRING NOT NULL,

    CONSTRAINT "Accept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scope" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcceptScope" (
    "acceptId" STRING NOT NULL,
    "scopeId" STRING NOT NULL,

    CONSTRAINT "AcceptScope_pkey" PRIMARY KEY ("acceptId","scopeId")
);

-- AddForeignKey
ALTER TABLE "Accept" ADD CONSTRAINT "Accept_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accept" ADD CONSTRAINT "Accept_cliendId_fkey" FOREIGN KEY ("cliendId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptScope" ADD CONSTRAINT "AcceptScope_acceptId_fkey" FOREIGN KEY ("acceptId") REFERENCES "Accept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptScope" ADD CONSTRAINT "AcceptScope_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
